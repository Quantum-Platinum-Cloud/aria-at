window[document.currentScript.getAttribute("jsonpFunction") || "scriptsJsonpLoaded"]({
  moveFocusToAndExpandCombobox(testPageDocument) {
    // sets focus on and expands the combobox
    testPageDocument.defaultView.comboboxController.open();
    testPageDocument.defaultView.comboboxController.comboboxNode.focus();
  }
});