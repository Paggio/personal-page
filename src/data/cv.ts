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
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Senior Data Engineer",
    company: "Cardo AI",
    period: "02/2026 – Present",
    location: "Milano, IT",
    bullets: [
      "Spark jobs optimisation and scheduling via Airflow",
      "Kubernetes cluster management and configuration",
      "Trino instance deployment for query results",
      "Data platform implementation — ETL pipelines and infrastructure",
    ],
    tags: ["Spark", "Airflow", "Kubernetes", "Trino"],
  },
  {
    title: "Data Engineer → Senior Data Engineer",
    company: "TrueLayer",
    period: "02/2022 – 01/2026",
    location: "London, UK / Milano, IT",
    bullets: [
      "Data pipeline development aggregating from microservices, databases, APIs and Elasticsearch",
      "Data organisation in S3 using Parquet and Iceberg formats",
      "Spark on EMR for large-scale processing with Athena queries",
      "Airflow DAGs and Kubernetes orchestration",
      "New data platform design — Aurora snapshots to Redshift migration",
      "Infrastructure as code with ECS, Glue, Step Functions, DBT and Terraform",
    ],
    tags: ["Spark", "EMR", "Airflow", "Iceberg", "Redshift", "DBT", "Terraform", "Athena", "Kubernetes"],
  },
  {
    title: "Big Data Engineering Junior Specialist",
    company: "Illimity",
    period: "05/2020 – 02/2022",
    location: "Milano, IT",
    bullets: [
      "Data stream development on Azure cloud architecture",
      "Databricks, Data Factory, Delta Lake and MongoDB workloads",
      "Azure DevOps workflow management",
    ],
    tags: ["Databricks", "Azure Data Factory", "Delta Lake", "MongoDB", "Azure DevOps"],
  },
  {
    title: "Doctoral Student",
    company: "Max Planck Institute for the Structure and Dynamics of Matter",
    period: "09/2019 – 04/2020",
    location: "Hamburg, Germany",
    bullets: [
      "RIXS cross-section analysis for condensed matter systems",
      "Computational simulations for correlated electron materials",
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
