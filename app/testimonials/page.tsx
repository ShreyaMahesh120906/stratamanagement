export default function Testimonials() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>What Our Users Say</h1>
      <div style={testimonialStyle}>
        <p>“Effortless building management!”</p>
        <strong>- Sarah W.</strong>
      </div>
      <div style={testimonialStyle}>
        <p>“A game-changer for meetings!”</p>
        <strong>- John D.</strong>
      </div>
      <div style={testimonialStyle}>
        <p>“Super easy to use!”</p>
        <strong>- Emma L.</strong>
      </div>
    </div>
  );
}

const testimonialStyle = {
  margin: "1rem 0",
  textAlign: "center" as const,
};
