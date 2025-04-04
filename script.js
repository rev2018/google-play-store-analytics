document.addEventListener("DOMContentLoaded", function () {
    // Helper function to fetch JSON data and render Plotly chart
    async function renderPlot(id, layoutFile, dataFile) {
        try {
            const layout = await fetch(`data/${layoutFile}`).then(res => res.json());
            const data = await fetch(`data/${dataFile}`).then(res => res.json());
            Plotly.newPlot(id, data, layout);
        } catch (error) {
            console.error(`Error loading ${id} chart:`, error);
        }
    }

    renderPlot('scatter-plot', 'scatter-layout.json', 'scatter-data.json');
    renderPlot('choropleth-map', 'choropleth-layout.json', 'choropleth-data.json');
    renderPlot('grouped-bar', 'grouped-bar-layout.json', 'grouped-bar-data.json');
    renderPlot('dual-axis', 'dual-axis-layout.json', 'dual-axis-data.json');
    renderPlot('heatmap', 'heatmap-layout.json', 'heatmap-data.json');
    renderPlot('time-series', 'time-series-layout.json', 'time-series-data.json');
    renderPlot('bubble-chart', 'bubble-layout.json', 'bubble-data.json');
});

 
             
