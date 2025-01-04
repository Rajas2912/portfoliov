import styles from "./Front_banner.module.css";
import banner_img from "../assets/portrait.png";
import { Button } from "@nextui-org/react";
function Front_banner() {
  return (
    <>
      <div className={styles.frontPage}>
        <div className={styles.topDiv}>
          <div className={styles.container}>
            <div className={styles.row}>
            <div className={styles.name1}>Hi I'm Rajas ,</div>
            <button className={styles.btn1}> Night Mode</button>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.row}
            style={{ margin: "38px 200px", display: "flex" }}
          >
            <div className={styles.colText} style={{ padding: "3%" }}>
              <h1 className={styles.title}>SOFTWARE DEVELOPER</h1>
              <p className={styles.lead}>
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
            </div>
            <div className={styles.colImage}>
              <img
                src={banner_img}
                className={styles.bannerImage}
                alt="Bootstrap Themes"
                width="400"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottomDiv}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.bd1}>Contact me</div>
              <div className={styles.bd2}>Machine Learning</div>
              <div className={styles.bd2}>Artificial Intelligence</div>
              <div className={styles.bd2}>ReactJS</div>
              <div className={styles.bd2}>DSA</div>
              <button
                className={styles.btn2}
                style={{ alignItems: "center" }}
                type="button"
              >
                Projects
                <svg class="bi ms-1" width="20" height="20">
                  <use xlink:href="#arrow-right-short"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Button> Hello me </Button>
      </div>
    </>
  );
}

export default Front_banner;
