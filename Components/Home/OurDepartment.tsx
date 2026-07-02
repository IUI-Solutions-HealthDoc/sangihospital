import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";

type Department = {
  name: string;
  href: string;
  icon: string;
};

const departments: Department[] = [
  {
    name: "Emergency",
    href: "/departments/emergency",
    icon: "/assets/images/icons/emergencyicon.svg",
  },
  {
    name: "Dental",
    href: "/departments/dental",
    icon: "/assets/images/icons/dentalicon.svg",
  },
  {
    name: "Gynecology",
    href: "/departments/gynecology",
    icon: "/assets/images/icons/pregicon.svg",
  },
  {
    name: "Neurology",
    href: "/departments/neurology",
    icon: "/assets/images/icons/neuroicon.svg",
  },
  {
    name: "Cardiology",
    href: "/departments/cardiology",
    icon: "/assets/images/icons/cardioicon.svg",
  },
  {
    name: "Psychiatry",
    href: "/departments/psychiatry",
    icon: "/assets/images/icons/physicyicon.svg",
  },
];

function DepartmentCard({ department }: { department: Department }) {
  return (
    <div className="col-lg-4 col-md-6">
      <Link href={department.href} className="department-card">
        <span className="department-card__circle" aria-hidden="true" />
        <div className="department-card__content d-flex align-items-center">
          <div className="department-card__icon-wrap">
            <AppImage
              src={department.icon}
              alt=""
              width={38}
              height={38}
              className="department-card__icon"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="department-card__title font-heading">
              {department.name}
            </h3>
            <p className="department-card__subtitle font-heading">Department</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function OurDepartment() {
  return (
    <section className="our-department py-5 py-lg-6">
      <div className="container">
        <div className="our-department__header text-center mx-auto">
          <p className="our-department__eyebrow font-body">Our Department</p>
          <h2 className="our-department__title font-heading">
            Experienced In Multiple Medical Practices For{" "}
            <span className="our-department__accent">Your Health</span>
          </h2>
        </div>

        <div className="row g-4 g-lg-4 mt-4 mt-lg-5">
          {departments.map((department) => (
            <DepartmentCard key={department.name} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
}
