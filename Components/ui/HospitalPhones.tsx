import { siteConfig } from "@/lib/site";

type HospitalPhonesProps = {
  className?: string;
  linkClassName?: string;
  separator?: string;
  layout?: "inline" | "stack";
};

export function HospitalPhones({
  className,
  linkClassName,
  separator = " / ",
  layout = "inline",
}: HospitalPhonesProps) {
  const phones = siteConfig.phones;

  if (layout === "stack") {
    return (
      <span className={className}>
        {phones.map((phone, index) => (
          <span key={phone.tel} className={index > 0 ? "hospital-phones__item" : undefined}>
            {index > 0 ? <br /> : null}
            <a href={`tel:${phone.tel}`} className={linkClassName}>
              {phone.display}
            </a>
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {phones.map((phone, index) => (
        <span key={phone.tel}>
          {index > 0 ? <span aria-hidden="true">{separator}</span> : null}
          <a href={`tel:${phone.tel}`} className={linkClassName}>
            {phone.display}
          </a>
        </span>
      ))}
    </span>
  );
}
