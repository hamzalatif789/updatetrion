const Aspireteam = () => {
    return (
      <section className=" py-16">
        <div className="container mx-auto px-4">
          {/* Heading and Description */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-5xl font-bold mb-4">Do you aspire to be like a lion?</h2>
            <p className="text-lg text-gray-400">
              Like a powerful lion joining our pack, every fresh team member strengthens our innovative and diligent wilderness.
            </p>
          </div>
  
          {/* Job Listings */}
          <div className="space-y-8">
            {[
              { title: "Web/ Mobile designers", link: "#" },
              { title: "Front-end developers", link: "#" },
              { title: "Back-end developers", link: "#" },
            ].map((job, index) => (
              <div key={index} className="flex items-center justify-between border-t  border-gray-600 pt-6">
                <h3 className="text-2xl font-medium">{job.title}</h3>
                <a
                  href={job.link}
                  className="flex items-center justify-center px-6 py-3 border border-gray-500 rounded-full  hover:bg-gray-800 transition"
                >
                  Apply now!
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Aspireteam;
  