import Head from "next/head";
import styles from "../styles/main.module.css";
import * as Icon from "../components/icons";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import buttonStyles from "../components/Button/style.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Superpeer UI Developer Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.card}>
          <div className={styles.callDetails}>
            <div className={styles.callTitle}>
              <p>Call with</p>
              <p>Niloya Kayıkçı</p>
            </div>
            <div className={styles.callSchedule}>
              <div>
                <Icon.Calendar currentColor={"#3488FA"} />
                <p>7 Oct, Weds</p>
              </div>
              <div>
                <Icon.Clock currentColor={"#3488FA"} />
                <p>10:15AM - 10.30AM</p>
              </div>
            </div>
            <p className={styles.callZone}>Timezone: Europe/Amsterdam</p>
          </div>
          <div className={styles.video}>
            <img src="/stock-image.jpg" />
            <div className={styles.videoControl}></div>
          </div>
          <div className={styles.settings}>
            <Input
              value="Adem İlter"
              icon={<Icon.User currentColor={"#3488FA"} />}
            />
            <div className={styles.settingsControls}>
              <Dropdown
                labelFor={"Camera"}
                options={[
                  { value: "Facetime HD Camera", label: "Facetime HD Camera" },
                ]}
              />
              <Dropdown
                labelFor={"Speaker"}
                options={[
                  {
                    value: "Built-in Output (Headp...",
                    label: "Built-in Output (Headp...",
                  },
                ]}
              />
              <Dropdown
                labelFor={"Microfone"}
                options={[
                  {
                    value: "Built-in Microphone (E...",
                    label: "Built-in Microphone (E...",
                  },
                ]}
              />
              <div>
                <Button
                  style={{ width: "100%" }}
                  variant={buttonStyles.primary}
                >
                  Join Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
