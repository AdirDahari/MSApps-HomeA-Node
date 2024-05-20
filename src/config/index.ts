import { config } from "dotenv";

// Using dotenv for a global properties, can adding more modes like production and testing and using another properties.
const configEnv = () => {
  config({ path: "src/config/.env" });

  const mode = process.env.NODE_ENV;
  console.log(`App is running in ${mode} Mode`);
  console.log(`Config file: src/config/${mode}.env`);

  config({ path: `src/config/${mode}.env` });
};

export { configEnv };
