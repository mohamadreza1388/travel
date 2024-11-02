$(function(){
    const applyCSSProperty = (propertyName) => {
        const elements = $(`[class*="${propertyName}"]`);
        elements.each(function() {
            const classNames = $(this).attr("class").split(" ");
            for(let i = 0; i < classNames.length; i++) {
                if(classNames[i].startsWith(propertyName)) {
                    const elementClassValue = classNames[i].substring(propertyName.length + 1);
                    $(this).css(propertyName, elementClassValue);
                }
            }
        });
    };

    const cssProperties = ["width", "height", "min-height", "font-size", "font-family", "font-weight", "text-align", "gap", "margin", "margin-right", "margin-left", "margin-top", "margin-bottom", "padding", "padding-right", "padding-left", "padding-top", "padding-bottom", "border-radius", "top", "right", "bottom", "left", "rotate", "list-style-type", "cursor","word-spacing"];

    cssProperties.forEach(property => {
        if($(`[class*="${property}"]`).length) {
            applyCSSProperty(property);
        }
    });
});
