const SUPABASE_URL = 'https://xfiqrmkltiotgutvboyr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmaXFybWtsdGlvdGd1dHZib3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNDMwNzIsImV4cCI6MjA2OTYxOTA3Mn0.Fbo2TllqbhLEaxiWXcl0KOBpi66aZgam2mAQjuk_jMg';
const BUCKET = 'gallery';

const gallery = document.getElementById('gallery');

// Load Supabase
const { createClient } = window.supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadImages() {
  const { data, error } = await supabase
    .storage
    .from(BUCKET)
    .list('', { limit: 100 });

  if (error) {
    console.error('Error loading images:', error.message);
    return;
  }

  for (const file of data) {
    const { data: signedURL } = await supabase
      .storage
      .from(BUCKET)
      .createSignedUrl(file.name, 60 * 60); // valid for 1 hour

    const img = document.createElement('img');
    img.src = signedURL.signedUrl;
    gallery.appendChild(img);
  }
}

loadImages();
