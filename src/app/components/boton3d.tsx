 import Link from "next/link";
import styles from "./Boton3d.module.css";
 
type BtnProps = {
  titulo: string;
  url?: string;
  className?: string;

};

 export default function FallingStars({ titulo, url, className }: BtnProps) {

    const isExternal = url?.startsWith("http");
if (!url) return null;
  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn3d} ${className || ""}`}
      >
        <span>{titulo}</span>
        <span>{titulo}</span>
        <span>{titulo}</span>
        <span>{titulo}</span>
      </a>
    );
  }
    return (
 <Link href={url} className={`${styles.btn3d} ${className || ""}`}>
            <span>{titulo}</span>
            <span>{titulo}</span>
            <span>{titulo}</span>
            <span>{titulo}</span>
          </Link>
    )


 }