export default function About() {
  return (
    <>
      <header className="bg-[#F9F9F9] border-b border-[#EAEAEA] py-10 md:py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4 text-black">
            About SUS Group
          </h1>
          <p className="text-[#666666] text-base md:text-lg max-w-2xl">
            A private network of startup founders building the future.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-12 py-8 md:py-12">
        <div className="max-w-2xl text-[#333333] text-base md:text-lg leading-relaxed">
          <p className="mb-4 md:mb-6">
            The SUS Group originated as a WhatsApp community to connect driven startup founders. Our goal is simple: foster high-signal conversations, share resources, and help members find their next key hires or co-founders.
          </p>
          <p className="mb-4 md:mb-6">
            This directory was built to surface the incredible startups within our group and provide a streamlined way for founders to showcase their open roles.
          </p>
          <p>
            Interested in joining? Reach out to an existing member for an invite.
          </p>
        </div>
      </main>
    </>
  );
}
