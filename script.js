    document.addEventListener('DOMContentLoaded', function() {
      const sampleBtn = document.getElementById('sample-btn');
      const miiDataTextarea = document.getElementById('mii-data');
      const nameCheckTextarea = document.getElementById('name-check-input');
      
      const exampleMiiData = "AwEAMLNeJY2M/BsmgP9wmaxJS0L1zwAAACxEAGEAbgBuAHkAAAAAAAAAAAAAAF8pAABrAQJoRBgmBGQSgRIXaA0AACkAUkhQRgBsAGEAawBlAG8AcgBnAAAAAAAAALOA";
      
      // button listener
      sampleBtn.addEventListener('click', function() {
        // fills the mii data
        miiDataTextarea.value = exampleMiiData;
        
        // fills the name area too
        nameCheckTextarea.value = exampleMiiData;
        
        // shows the message
        const messagesDiv = document.getElementById('messages');
        messagesDiv.textContent = 'Example Mii data loaded! Click "Render Mii!" to see the preview.';
        messagesDiv.style.color = 'green';
        
        // gets the message out
        setTimeout(() => {
          messagesDiv.textContent = '';
        }, 3000);
      });
      
    });