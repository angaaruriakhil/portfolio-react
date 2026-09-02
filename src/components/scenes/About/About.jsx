import styles from "./About.module.css";
import HeaderBar from "../../layout/HeaderBar/HeaderBar";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <HeaderBar
        as="h1"
        title="About"
        icon={<i className="fas fa-user" />}
        align="left"
        subtitle="A little about me."
        subtitleAlign="left"
      />

      <div className={styles.panel} data-aos="zoom-in">
        <div className={styles.split}>
          <div
            className={`${styles.card} ${styles.left}`}
            data-aos="fade-right"
            data-aos-delay="40"
          >
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.cardTitle}>Background</h3>
                <span className={styles.cardSubtitle}>
                  From Chemical to Platform Engineering
                </span>
              </div>
            </div>

            <div className={styles.intro}>
              <p className={styles.introLead}>
                I build secure, scalable platforms that make software delivery
                simpler for developers.
              </p>

              <p>
                I’m a Senior Platform Engineer working across cloud
                infrastructure, DevSecOps, automation and developer experience.
                I’m particularly interested in problems where technical
                constraints, security, cost and developer needs meet.
              </p>

              <p className={styles.philosophy}>
                I like making complicated things feel simple. Much of platform
                engineering is about taking complexity that developers shouldn’t
                have to think about and turning it into reliable, repeatable
                paths.
              </p>
            </div>

            <div className={styles.career}>
              <div className={styles.sectionLabel}>Career path</div>

              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <span className={styles.timelineYear}>2016–20</span>

                  <div className={styles.timelineContent}>
                    <strong>Chemical Engineering</strong>
                    <span>First Class MEng · University of Surrey</span>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <span className={styles.timelineYear}>2021–22</span>

                  <div className={styles.timelineContent}>
                    <strong>Software Engineering</strong>
                    <span>_nology → QBE</span>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <span className={styles.timelineYear}>2022–25</span>

                  <div className={styles.timelineContent}>
                    <strong>Platform Engineer</strong>
                    <span>QBE · Cloud · DevSecOps · Automation</span>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <span className={styles.timelineYear}>2025–now</span>

                  <div className={styles.timelineContent}>
                    <strong>Senior Platform Engineer</strong>
                    <span>
                      QBE · Platform · Developer Experience · Strategy
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bottomGrid}>
              <div className={styles.infoBlock}>
                <div className={styles.sectionLabel}>Research</div>

                <p>
                  Before moving into software, I co-authored published research
                  on PFAS remediation.
                </p>

                <a
                  className={styles.researchLink}
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0045653521014971"
                  target="_blank"
                  rel="noreferrer"
                >
                  View publication
                  <i className="fas fa-arrow-up-right-from-square" />
                </a>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.sectionLabel}>Outside engineering</div>

                <p>
                  Outside engineering, I enjoy repairing electronics, watching
                  films and playing video games.
                </p>
              </div>
            </div>
          </div>

          <aside
            className={`${styles.card} ${styles.right}`}
            data-aos="fade-left"
            data-aos-delay="80"
            aria-label="How I work"
          >
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.cardTitle}>How I Work</h3>
                <span className={styles.cardSubtitle}>
                  Principles behind the way I engineer platforms
                </span>
              </div>
            </div>

            <div className={styles.principles}>
              <div className={styles.principle}>
                <i className={`fas fa-project-diagram ${styles.icon}`} />

                <div>
                  <strong>Systems thinking</strong>
                  <span>
                    I look beyond the immediate problem to understand
                    dependencies, failure modes and long-term maintainability.
                  </span>
                </div>
              </div>

              <div className={styles.principle}>
                <i className={`fas fa-shield-alt ${styles.icon}`} />

                <div>
                  <strong>Secure by default</strong>
                  <span>
                    Security and governance should be built into the path
                    developers already take, rather than added afterwards.
                  </span>
                </div>
              </div>

              <div className={styles.principle}>
                <i className={`fas fa-lightbulb ${styles.icon}`} />

                <div>
                  <strong>Pragmatic engineering</strong>
                  <span>
                    I balance engineering quality with risk, cost, delivery
                    pressure and the constraints of the wider organisation.
                  </span>
                </div>
              </div>

              <div className={styles.principle}>
                <i className={`fas fa-user-friends ${styles.icon}`} />

                <div>
                  <strong>Developer empathy</strong>
                  <span>
                    A platform should reduce friction and make the right way of
                    doing things easier for the people using it.
                  </span>
                </div>
              </div>

              <div className={styles.principle}>
                <i className={`fas fa-tasks ${styles.icon}`} />

                <div>
                  <strong>Ownership</strong>
                  <span>
                    I’m comfortable taking ambiguous problems from investigation
                    through implementation, adoption and improvement.
                  </span>
                </div>
              </div>

              <div className={styles.principle}>
                <i className={`fas fa-comments ${styles.icon}`} />

                <div>
                  <strong>Communication</strong>
                  <span>
                    I make complex technical decisions understandable across
                    engineering, security and wider stakeholder groups.
                  </span>
                </div>
              </div>

              <div className={styles.principle}>
                <i className={`fas fa-chart-line ${styles.icon}`} />

                <div>
                  <strong>Evidence over assumption</strong>
                  <span>
                    I prefer to understand problems through data, observation
                    and experimentation before deciding what to change.
                  </span>
                </div>
              </div>

              <div className={styles.principle}>
                <i className={`fas fa-sync-alt ${styles.icon}`} />

                <div>
                  <strong>Continuous improvement</strong>
                  <span>
                    I look for opportunities to leave systems simpler, safer and
                    more reliable than I found them.
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
