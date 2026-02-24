 import Link from "next/link";
 import "./boton3d.css";
 
type BtnProps = {
  titulo: string;
  url?: string;
};

 export default function FallingStars({ titulo, url }: BtnProps) {

    const isExternal = url?.startsWith("http");
if (!url) return null;
  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-3d"
      >
        <span>{titulo}</span>
        <span>{titulo}</span>
        <span>{titulo}</span>
        <span>{titulo}</span>
      </a>
    );
  }
    return (
 <Link href={url} className="btn-3d">
            <span>{titulo}</span>
            <span>{titulo}</span>
            <span>{titulo}</span>
            <span>{titulo}</span>
          </Link>
    )


 }