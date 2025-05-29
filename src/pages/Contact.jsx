export default function Contact() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h1>
      <p className="mb-4 text-blue-700">Questions? Suggestions? Reach out below!</p>
      <form className="bg-white/80 rounded-lg p-6 shadow max-w-md mx-auto flex flex-col space-y-4">
        <input className="p-2 rounded border border-blue-200" type="text" placeholder="Your Name" required />
        <input className="p-2 rounded border border-blue-200" type="email" placeholder="Your Email" required />
        <textarea className="p-2 rounded border border-blue-200" placeholder="Your Message" rows={4} required />
        <button className="bg-blue-500 text-white rounded py-2 font-bold hover:bg-blue-600" type="submit">Send</button>
      </form>
    </section>
  );
}
