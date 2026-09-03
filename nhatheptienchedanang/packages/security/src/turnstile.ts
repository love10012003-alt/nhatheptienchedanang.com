export async function verifyTurnstile(token:string){
  if(!process.env.TURNSTILE_SECRET_KEY) return true; // cho dev 0đ bỏ qua
  if(!token) return false;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify",{
    method:"POST",
    body: new URLSearchParams({secret: process.env.TURNSTILE_SECRET_KEY, response: token})
  });
  const data = await res.json();
  return data.success;
}
