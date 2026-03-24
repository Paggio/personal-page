export const cvMeta = {
  name: "Mattia Pagetti",
  tagline: "Senior Data Engineer",
  email: "pagetti.mattia@gmail.com",
  phone: "+39 331 710 9356",
  linkedin: "mattia-pagetti-40891019b",
  location: "Milano, IT",
  birthplace: "Sondrio (SO), Italy",
  dob: "21/02/1994",
};

export interface ExperienceEntry {
  title: string;
  company: string;
  logo: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Senior Data Engineer",
    company: "Cardo AI",
    logo: "logos/cardo_ai.png",
    period: "02/2026 – Present",
    location: "Milano, IT",
    description: [
      "I implement and optimize Spark jobs scheduled via Airflow on a Kubernetes-based Spark cluster, maintain and configure the cluster, and manage the Trino deployment used to query results. I work across the entire data platform, from hands-on ETL to underlying infrastructure.",
    ],
    tags: ["Spark", "Airflow", "Kubernetes", "Trino"],
  },
  {
    title: "Data Engineer → Senior Data Engineer",
    company: "TrueLayer",
    logo: "logos/truelayer_logo.png",
    period: "02/2022 – 01/2026",
    location: "London, UK / Milano, IT",
    description: [
      "I developed and managed data pipelines aggregating information from microservices databases, queues, third-party APIs and Elasticsearch, organizing it in S3 (Parquet/Iceberg format). Data is processed using **Spark** on **EMR** and queried via Athena, orchestrated through **Airflow** DAGs or **Kubernetes** microservices.",
      "As a Senior Data Engineer (promoted in February 2023), I designed and implemented a new data platform from the ground up, automating Aurora cluster snapshots and their load into **Redshift** through **ECS** tasks, **Glue**, and Step Functions, with data models managed via **DBT**. All infrastructure provisioned using **Terraform**.",
    ],
    tags: ["Spark", "EMR", "Airflow", "Iceberg", "Redshift", "DBT", "Terraform", "Athena", "Kubernetes"],
  },
  {
    title: "Big Data Engineering Junior Specialist",
    company: "Illimity",
    logo: "logos/illimity_logo.png",
    period: "05/2020 – 02/2022",
    location: "Milano, IT",
    description: [
      "I contributed to the development and maintenance of Illimity's data streams within an Azure-based IT architecture. The data streams were built using **Databricks**, **Data Factory**, **Delta Lake**, and **MongoDB**, with all workflows managed through Azure DevOps.",
    ],
    tags: ["Databricks", "Azure Data Factory", "Delta Lake", "MongoDB", "Azure DevOps"],
  },
  {
    title: "Doctoral Student",
    company: "Max Planck Institute for the Structure and Dynamics of Matter",
    logo: "logos/max_planck.png",
    period: "09/2019 – 04/2020",
    location: "Hamburg, Germany",
    description: [
      "I participated in the theoretical and computational analysis of RIXS cross-sections, utilizing software for conducting advanced simulations of realistic condensed matter systems.",
    ],
    tags: ["Python", "Scientific Computing", "RIXS"],
  },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Main Stack",
    items: ["Spark", "Airflow", "Iceberg", "DBT", "Databricks", "Terraform", "LangChain", "LangGraph"],
  },
  {
    category: "AWS",
    items: ["EMR", "Redshift", "Athena", "S3", "Glue", "EC2", "ECS", "Lambda", "Step Functions", "EKS", "RabbitMQ"],
  },
  {
    category: "Microsoft Azure",
    items: ["Data Factory", "Data Lake", "Purview", "Synapse"],
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    degree: "MSc Physics Engineering",
    institution: "Politecnico di Milano",
    period: "02/2017 – 04/2019",
    grade: "108/110",
    note: "Specialisation: Nanophysics & Nanotechnology",
  },
  {
    degree: "BSc Physics Engineering",
    institution: "Politecnico di Milano",
    period: "10/2013 – 02/2017",
    grade: "91/110",
  },
];

export interface Publication {
  title: string;
  institution: string;
  year: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title:
      "Determining the Electron-Phonon Coupling in Superconducting Cuprates by Resonant Inelastic X-ray Scattering: Methods and Results on Nd₁₊ₓBa₂₋ₓCu₃O₇₋δ",
    institution: "Politecnico di Milano",
    year: "2019",
    url: "https://arxiv.org/abs/1906.01270",
  },
];
