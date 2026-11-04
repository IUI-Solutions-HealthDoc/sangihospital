export type HospitalStatus = "active" | "upcoming";

export type HospitalLocation = {
  id: string;
  name: string;
  city: string;
  address: string;
  image: string;
  href: string;
  status?: HospitalStatus;
};

export type HospitalState = {
  id: string;
  label: string;
  hospitals: HospitalLocation[];
};

export type HospitalRegion = {
  id: string;
  label: string;
  states: HospitalState[];
};

export const hospitalsMegaMenu = {
  viewAllHref: "/#our-hospitals",
  regions: [
    {
      id: "north",
      label: "North India",
      states: [
        {
          id: "uttar-pradesh",
          label: "Uttar Pradesh",
          hospitals: [
            {
              id: "raya",
              name: "Sangi Hospital, Raya",
              city: "Raya",
              address: "Mathura Road, Raya, Uttar Pradesh",
              image: "/assets/images/hospitals/raya.jpg",
              href: "/hospitals/raya",
            },
            {
              id: "lakshmi-nagar",
              name: "Sangi Hospital, Lakshmi Nagar",
              city: "Lakshmi Nagar",
              address: "Lakshmi Nagar, Uttar Pradesh",
              image: "/assets/sangiimages1/sangiimages1/homepage/twofl.jpeg",
              href: "/hospitals/lakshmi-nagar",
            },
            {
              id: "etah",
              name: "Sangi Hospital, Etah",
              city: "Etah",
              address: "Etah, Uttar Pradesh",
              image: "/assets/images/about/about-banner.jpg",
              href: "/hospitals/etah",
              status: "upcoming",
            },
            {
              id: "mathura",
              name: "Sangi Hospital, Mathura",
              city: "Mathura",
              address: "Mathura, Uttar Pradesh",
              image: "/assets/images/about/about-banner.jpg",
              href: "/hospitals/mathura",
              status: "upcoming",
            },
          ],
        },
        {
          id: "delhi-ncr",
          label: "Delhi NCR",
          hospitals: [],
        },
        {
          id: "punjab",
          label: "Punjab",
          hospitals: [],
        },
        {
          id: "haryana",
          label: "Haryana",
          hospitals: [],
        },
        {
          id: "rajasthan",
          label: "Rajasthan",
          hospitals: [],
        },
      ],
    },
    {
      id: "east",
      label: "East India",
      states: [
        {
          id: "west-bengal",
          label: "West Bengal",
          hospitals: [],
        },
        {
          id: "bihar",
          label: "Bihar",
          hospitals: [],
        },
      ],
    },
    {
      id: "south",
      label: "South India",
      states: [
        {
          id: "karnataka",
          label: "Karnataka",
          hospitals: [],
        },
        {
          id: "telangana",
          label: "Telangana",
          hospitals: [],
        },
      ],
    },
    {
      id: "west",
      label: "West India",
      states: [
        {
          id: "maharashtra",
          label: "Maharashtra",
          hospitals: [],
        },
        {
          id: "gujarat",
          label: "Gujarat",
          hospitals: [],
        },
      ],
    },
  ] satisfies HospitalRegion[],
} as const;

export function getDefaultStateForRegion(region: HospitalRegion): HospitalState {
  return (
    region.states.find((state) => state.hospitals.length > 0) ?? region.states[0]
  );
}

export function getAllHospitals(): HospitalLocation[] {
  return hospitalsMegaMenu.regions.flatMap((region) =>
    region.states.flatMap((state) => state.hospitals),
  );
}

export function isHospitalUpcoming(hospital: HospitalLocation): boolean {
  return hospital.status === "upcoming";
}
