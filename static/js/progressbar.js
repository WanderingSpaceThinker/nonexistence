


window.onload = function() {
  const container = document.querySelector('.progress_container');
  const progressBar = document.querySelector('.progress-bar');

  if (progressBar) {
    const totalLength = progressBar.getTotalLength();

    progressBar.style.strokeDasharray = totalLength;
    progressBar.style.strokeDashoffset = totalLength;
    container.style.visibility = 'hidden';
    container.style.opacity = 0;

    window.addEventListener('scroll', () => {
      setProgress(container, progressBar, totalLength);
    });
  }
}

function setProgress(container, progressBar, totalLength) {
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  
  const percentage = scrollTop / (scrollHeight - clientHeight);
  progressBar.style.strokeDashoffset = totalLength - totalLength * percentage;

  container.style.visibility = 'visible';
  container.style.opacity = 1;
}