document.addEventListener('DOMContentLoaded', function() {
    const pdfOverlay = document.createElement('div');
    pdfOverlay.className = 'pdf-overlay';
    
    const pdfCloseBtn = document.createElement('button');
    pdfCloseBtn.className = 'pdf-close-btn';
    pdfCloseBtn.innerHTML = '&times;';
    
    const pdfContent = document.createElement('div');
    pdfContent.className = 'pdf-content';
    
    pdfOverlay.appendChild(pdfCloseBtn);
    pdfOverlay.appendChild(pdfContent);
    document.body.appendChild(pdfOverlay);

    document.querySelectorAll('.open-pdf').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pdfPath = this.getAttribute('data-pdf');
            
            const pdfViewer = document.createElement('iframe');
            pdfViewer.src = pdfPath;
            pdfViewer.className = 'fullscreen-pdf';
            
            pdfContent.innerHTML = '';
            pdfContent.appendChild(pdfViewer);
            
            pdfOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    pdfCloseBtn.addEventListener('click', function() {
        pdfOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    pdfOverlay.addEventListener('click', function(e) {
        if (e.target === pdfOverlay) {
            pdfOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});