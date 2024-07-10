import Navbar from "@/components/navbar";

export default function ExperienceLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar/>
        {children}
      </section>
    )
  }