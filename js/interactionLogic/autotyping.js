document.addEventListener('DOMContentLoaded', (event) => {
    const el = document.querySelector(".image-text-responsivo");
    const img = document.querySelector(".imagem-responsiva"); 
    const interval = 12; 
    let typerId;

    function showText(el, text, interval){
        clearInterval(typerId); 
        el.innerHTML = ''; 
        const char = text.split("").reverse() 
    
        typerId = setInterval(() => {
            if(!char.length){
                return clearInterval(typerId);
            }
    
            const next = char.pop();
    
            el.innerHTML += next;
        }, interval);
    }

    document.querySelectorAll('.sidebar a').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            let defaultText = 'Texto padrão aqui';
            showText(el, defaultText, interval);

            let text;
            let imageSrc;
            switch (button.textContent.trim()) {
                case 'Natural Color':
                    text = 'Bands 4, 3 and 2 of Landsat 8 correspond, respectively, to the red, green and blue portions of the visible spectrum. It closely replicates what our human eyes can see. While healthy vegetation appears green in color, unhealthy flora is brown in color. Urban features are presented in white and gray tones, while the water is dark blue or black. This allows for better interpretation and differentiation of different targets, such as vegetation, urban areas and bodies of water.';
                    imageSrc = '../assets/naturalview.png';
                    break;
                case 'Color Infrared':
                    text = 'This combination of bands is known as composite near infrared (NIR). It uses the near infrared (5), red (4) and green (3) bands. Because chlorophyll reflects near-infrared light, this band composition is useful for analyzing vegetation. Areas in red indicate better vegetation health. Dark areas represent water and urban areas appear white. This makes it easier to interpret and differentiate different targets, such as vegetation, urban areas and bodies of water.';
                    imageSrc = './assets/landsat-test.png';
                    break;
                case 'Sabins Ratio':
                    text = 'This combination of bands is known as composite Sabins ratio. It is used mostly to Mapping hydrothermal alteration minerals. It uses RGB color composed of ratios R (4/2), G (6/7), B (6/5). Iron-oxide dominated areas are mapped in pink, clay and hydroxyl minerals in green and ferrous minerals are discriminated in blue. Hydrothermal alteration areas are represented by the association of green-pink or yellow zones.';
                    imageSrc = './assets/landsat-test.png';
                    break;
                case 'Kaufman Ratio':
                    text = "This combination of bands is known as Kaufmann's band ratio. It uses RGB color composed of ratios R (7/5), G (5/4), B (6/7). It is interesting to visualize various geological features. Within this color scheme, vegetation zones emerge as vibrant green areas, primarily driven by the 5/4 ratio. Water bodies, characterized by their drainage patterns, are prominently represented in a deep, dark blue hue. The presence of ferric and ferrous iron, as depicted by the 7/5 ratio, is expressed through a distinct pink coloration. Moreover, a shade of medium blue appears to accentuate altered areas rich in hydroxyl-bearing minerals, as indicated by the 6/7 ratio.";
                    imageSrc = './assets/landsat-test.png';
                    break;
                case 'Sultan Ratio':
                    text = "This combination of bands is known as Sultan's band ratio combinations. It uses RGB color composed of ratios R (6/7), G (6/2), B (6/5*4/5). It is a powerful tool for distinguishing various geological features, vegetated regions are represented by a deep, dark green, while bodies of water stand out vividly in a rich, dark pink. A subtle yet discernible brown, reminiscent of coffee with milk, serves to accentuate hydroxyl-bearing minerals, including clay minerals, mica, and talc-carbonate. These minerals exhibit distinctive characteristics, with high reflectance in band 6 and pronounced absorption properties in band 7, making them reliable indicators of hydrothermal alteration processes, besides that, the 6/2 ratio indicates the magnetite in a striking turquoise or bluish-green shade and iron oxides and iron-bearing minerals are prominently highlighted in a palette of light purple and pinkish hues.";
                    imageSrc = './assets/landsat-test.png';
                    break;
                case 'Ferric iron 1':
                    text = 'This is a ratio-based spectral index, they highlight specific mineral groups by exploiting diagnostic absorption feature characteristics.  The band ratio 4/2 shows spectra of jarosite and most other iron sulfate minerals (hematite, goethite, limonite, etc.) a strong absorption. The color red in the map highlights the areas with the most strong absorption.';
                    imageSrc = './assets/landsat-test.png';
                    break;
                case 'Clay, sulfate, mica, and marble':
                    text = 'This is a ratio-based spectral index, they highlight specific mineral groups by exploiting diagnostic absorption feature characteristics.  The band ratio 4/2 shows alunite and hydrothermal clay minerals in bright tones with most strong absorption.';
                    imageSrc = './assets/landsat-test.png';
                    break;
                case 'Green vegetation':
                    text = 'This is a ratio-based spectral index, they highlight specific mineral groups by exploiting diagnostic absorption feature characteristics.  The band ratio 5/4 ratio highlights areas of deep absorption in band 4 (red wavelengths) relative to band 5 (near-infrared wavelengths), which typically include areas of dense, green vegetation with abundant chlorophyll.';
                    imageSrc = './assets/landsat-test.png';
                    break;
                default:
                    text = '';
                    imageSrc = '';
                    break;
            }

            el.style.color = "#BDBDBE"; 
            el.style.fontSize = "15px"; 
            el.style.lineHeight = "24px";

            showText(el, text, interval);
            img.src = imageSrc;
        });
        if (button.textContent.trim() === 'Natural Color') {
            button.click();
        }
    });
    
    document.querySelector('.header-feed img[src="./assets/download.png"]').addEventListener('click', function() {
        
        let a = document.createElement('a');
        
        a.href = document.querySelector('.imagem-responsiva').src;
        
        a.download = 'processed-image.png';
        
        a.click();
    });
});

