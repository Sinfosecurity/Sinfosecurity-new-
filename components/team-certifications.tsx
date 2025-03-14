export default function TeamCertifications() {
  const certifications = [
    {
      id: 1,
      name: "CISSP",
      fullName: "Certified Information Systems Security Professional",
      count: 12,
      icon: "/certifications/cissp.svg",
    },
    {
      id: 2,
      name: "CISM",
      fullName: "Certified Information Security Manager",
      count: 8,
      icon: "/certifications/cism.svg",
    },
    {
      id: 3,
      name: "CEH",
      fullName: "Certified Ethical Hacker",
      count: 15,
      icon: "/certifications/ceh.svg",
    },
    {
      id: 4,
      name: "OSCP",
      fullName: "Offensive Security Certified Professional",
      count: 6,
      icon: "/certifications/oscp.svg",
    },
    {
      id: 5,
      name: "CCSP",
      fullName: "Certified Cloud Security Professional",
      count: 9,
      icon: "/certifications/ccsp.svg",
    },
    {
      id: 6,
      name: "Security+",
      fullName: "CompTIA Security+",
      count: 18,
      icon: "/certifications/security-plus.svg",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {certifications.map((cert) => (
        <div key={cert.id} className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="mb-4 flex justify-center">
            <img
              src={cert.icon || `/placeholder.svg?height=80&width=80&text=${cert.name}`}
              alt={cert.name}
              className="h-16 w-16"
            />
          </div>
          <h3 className="text-lg font-bold text-primary mb-1">{cert.name}</h3>
          <p className="text-xs text-muted-foreground mb-3">{cert.fullName}</p>
          <div className="font-mono text-xl font-bold text-accent">{cert.count}</div>
          <p className="text-xs text-muted-foreground">Certified Experts</p>
        </div>
      ))}
    </div>
  )
}

