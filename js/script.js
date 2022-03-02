window.onload = updatePreview;
    function updatePreview() {
      let previewElement = document.getElementById("preview");
      let editorValue = document.getElementById("editor");
      // {breaks: true} interprets carriage returns and renders them as <br> (line break)
      let markedHTML = marked.parse(editorValue.value, {breaks: true});
      previewElement.innerHTML = markedHTML;
    }