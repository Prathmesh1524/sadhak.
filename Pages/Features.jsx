function Features() {
    return (
      <section className="features py-20">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <ul className="flex flex-wrap justify-center">
            <li className="w-full md:w-1/2 xl:w-1/3 p-4">
              <i className="fas fa-search text-4xl text-blue-500" />
              <h3 className="text-lg font-bold mb-2">Job Search</h3>
              <p className="text-lg">Search for jobs and internships from top companies and startups</p>
            </li>
            <li className="w-full md:w-1/2 xl:w-1/3 p-4">
              <i className="fas fa-filter text-4xl text-blue-500" />
              <h3 className="text-lg font-bold mb-2">Filter and Sort</h3>
              <p className="text-lg">Filter and sort jobs by location, job type, and more</p>
            </li>
            <li className="w-full md:w-1/2 xl:w-1/3 p-4">
              <i className="fas fa-bookmark text-4xl text-blue-500" />
              <h3 className="text-lg font-bold mb-2">Job Alerts</h3>
              <p className="text-lg">Get notified about new job openings that match your preferences</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default Features