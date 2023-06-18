// Styles
import styles from "@/styles/components/ui/PageTitle.module.scss";

export default function PageTitle({ title }: { title: string }) {
  return <h1 className={styles.PageTitle}>{title}</h1>;
}
