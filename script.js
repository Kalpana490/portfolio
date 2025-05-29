document.getElementById('resumeUpload').addEventListener('change', function() {
  const file = this.files[0];
  
  if (file) {
    const fileURL = URL.createObjectURL(file);
    
    // Display the resume download link
    const resumeLink = document.getElementById('resumeLink');
    resumeLink.innerHTML = <a href="${fileURL}" target="_blank">Download My Resume</a>;
  } else {
    // Reset if no file selected
    document.getElementById('resumeLink').innerHTML = '';
  }
});