import { useCallback } from "react";

/** ---------------- assemble bare (obfuscated) URL ---------------- */
function assembleGBareMessage() {
  const gfrac_object = {
    gfrac_0_array: ["h", "!", "t", "%", "t", "*", "p", "s", ":", "/", "/"],
    gfrac_1_array: ["$", "/", "$", "%", "d", "^", "r", "*", "i", "v", "e"],
    gfrac_2_array: [".", "!", "g", "%", "o", "o", "9", "g", "l", "6", "e"],
    gfrac_3_array: ["%", ".", "c", "$", "@", "o", "£", "m", "*", "^", "#"],
    gfrac_4_array: ["/", "f", "$", "o", "l", "%", "d", "e", "*", "r", "s"],
    gfrac_5_array: [
      "/",
      "1",
      "6",
      "b",
      "9",
      "e",
      "z",
      "6",
      "7",
      "a",
      "7",
      "x",
      "E",
      "h",
      "^",
      "4",
      "r",
      "s",
      "m",
      "v",
      "u",
      "x",
      "N",
      "F",
      "n",
      "L",
      "p",
      "n",
      "C",
      "3",
      "v",
      "M",
      "e",
      "i",
      "p",
      "?",
      "u",
      "s",
      "p",
      "=",
      "s",
      "h",
      "a",
      "r",
      "i",
      "n",
      "g",
      "%",
    ],
  };

  const regex_g0 = /[a-z:/]/;
  const regex_g1 = /[/a-z]/;
  const regex_g2 = /[.a-z]/;
  const regex_g3 = /[%^]/;

  const filtered_g0 = gfrac_object.gfrac_0_array.filter((i) =>
    regex_g0.test(i)
  );
  const filtered_g1 = gfrac_object.gfrac_1_array.filter((i) =>
    regex_g1.test(i)
  );
  const filtered_g2 = gfrac_object.gfrac_2_array.filter((i) =>
    regex_g2.test(i)
  );
  const filtered_g3 = gfrac_object.gfrac_3_array.filter((i) =>
    regex_g2.test(i)
  );
  const filtered_g4 = gfrac_object.gfrac_4_array.filter((i) =>
    regex_g1.test(i)
  );
  const filtered_g5 = gfrac_object.gfrac_5_array.filter(
    (i) => !regex_g3.test(i)
  );

  const g_unlocked_array = [
    filtered_g0.join(""),
    filtered_g1.join(""),
    filtered_g2.join(""),
    filtered_g3.join(""),
    filtered_g1.join(""),
    filtered_g4.join(""),
    filtered_g5.join(""),
  ];

  return (
    g_unlocked_array[0] +
    g_unlocked_array[1] +
    g_unlocked_array[2] +
    g_unlocked_array[3] +
    g_unlocked_array[4] +
    g_unlocked_array[5] +
    g_unlocked_array[6]
  );
}

/** ---------------- WebCrypto helpers (AES-GCM) ---------------- */
const enc = new TextEncoder();
const dec = new TextDecoder();

async function deriveKey(password) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode("cv-salt"), // static salt ok; this is obfuscation, not security
      iterations: 1000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

async function aesEncrypt(plaintext, password) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password);
  const ct = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(plaintext)
  );
  const combined = new Uint8Array(iv.byteLength + ct.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ct), iv.byteLength);
  let binary = "";
  combined.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
}

async function aesDecrypt(b64, password) {
  const raw = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const iv = raw.slice(0, 12);
  const data = raw.slice(12);
  const key = await deriveKey(password);
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  return dec.decode(pt);
}

async function locked_glink() {
  const secretKey2 = "secretKey2";
  const g_bare_message = assembleGBareMessage();
  return aesEncrypt(g_bare_message, secretKey2);
}

async function g_unlockedLink() {
  const secretKey2 = "secretKey2";
  const cipher = await locked_glink();
  return aesDecrypt(cipher, secretKey2);
}

/** ---------------- Public hook API ---------------- */
export function useCvLink() {
  const getCvUrl = useCallback(async () => {
    if (typeof window === "undefined" || !window.crypto?.subtle) {
      throw new Error("WebCrypto not available");
    }
    return g_unlockedLink();
  }, []);

  const openCvInNewTab = useCallback(async () => {
    const url = await getCvUrl();
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      alert(
        "Popup was blocked — click the link again or enable popups for this site."
      );
    }
  }, [getCvUrl]);

  const onResumeClick = useCallback(
    async (e) => {
      e?.preventDefault?.();
      try {
        await openCvInNewTab();
      } catch {
        alert("Could not open CV right now.");
      }
    },
    [openCvInNewTab]
  );

  return { getCvUrl, openCvInNewTab, onResumeClick };
}
