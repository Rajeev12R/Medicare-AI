"use client"
import React from "react"

const teamMembers = [
  {
    name: "Dr. Ayesha Sharma",
    role: "Chief Medical Officer",
    bio: "Expert in internal medicine with 15+ years of experience in digital healthcare.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul Mehta",
    role: "Lead AI Engineer",
    bio: "Specialist in AI-driven diagnostics and healthcare automation.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Desai",
    role: "Product Manager",
    bio: "Passionate about building user-centric healthcare solutions.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Senior Data Scientist",
    bio: "Focuses on predictive analytics and patient data security.",
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  },
]

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Meet Our Team</h1>
        <p className="text-lg text-muted-foreground">Passionate professionals dedicated to revolutionizing healthcare with AI and compassion.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-card rounded-xl shadow p-6 flex flex-col items-center">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-200" />
            <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-1">{member.role}</p>
            <p className="text-sm text-muted-foreground">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamPage 