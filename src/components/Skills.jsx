export default function Skills() {
    const skills = ['JavaScript', 'React.Js', 'Node.Js'];
  
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-3 gap-4">
          {skills.map(skill => (
            <div key={skill} className="p-4 border rounded shadow-sm">
              <h3 className="text-xl font-semibold">{skill}</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  