export default function Contact() {
  return (
    <section className="p-8 max-w-2xl mx-auto mt-8 bg-white/80 rounded-3xl shadow-xl">
      <h1 className="font-thick text-4xl text-blue-900 mb-6">Contact Us</h1>
      <p className="text-lg text-blue-800 mb-8">Questions? Suggestions? Reach out below!</p>
      <form className="bg-blue-50 rounded-xl p-8 shadow flex flex-col space-y-6">
        <input className="p-3 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" type="text" placeholder="Your Name" required />
        <input className="p-3 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" type="email" placeholder="Your Email" required />
        <textarea className="p-3 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Your Message" rows={4} required />
        <button className="bg-blue-500 text-white rounded py-3 font-thick text-lg hover:bg-blue-600 transition" type="submit">Send</button>
      </form>
    </section>
  );
}
