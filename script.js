// Plotly chart rendering based on exported JSON data

// 1. Scatter Plot - Rating vs Reviews
Plotly.newPlot('scatter-plot', {
  data: [{
    x: [4.1, 4.5, 4.3, 4.8, 3.9],
    y: [1200, 3400, 2100, 8000, 300],
    mode: 'markers',
    type: 'scatter',
    marker: { size: 12 }
  }],
  layout: {
    title: 'Rating vs Reviews',
    xaxis: { title: 'Rating' },
    yaxis: { title: 'Reviews' }
  }
});

// 2. Grouped Bar Chart - Content Rating
Plotly.newPlot('grouped-bar', {
  data: [
    {
      x: ['Everyone', 'Teen', 'Mature 17+'],
      y: [300, 150, 90],
      name: 'Number of Apps',
      type: 'bar'
    }
  ],
  layout: {
    title: 'App Count by Content Rating',
    barmode: 'group'
  }
});

// 3. Dual Axis Line Chart - Rating vs Reviews
Plotly.newPlot('dual-axis', {
  data: [
    {
      x: ['App A', 'App B', 'App C', 'App D'],
      y: [4.5, 4.0, 4.8, 3.5],
      name: 'Rating',
      yaxis: 'y1',
      type: 'scatter'
    },
    {
      x: ['App A', 'App B', 'App C', 'App D'],
      y: [1000, 2300, 5400, 600],
      name: 'Reviews',
      yaxis: 'y2',
      type: 'scatter'
    }
  ],
  layout: {
    title: 'Rating and Reviews by App',
    yaxis: { title: 'Rating', side: 'left' },
    yaxis2: {
      title: 'Reviews',
      overlaying: 'y',
      side: 'right'
    }
  }
});

// 4. Pie Chart - Genre Distribution
Plotly.newPlot('genre-pie', {
  data: [{
    labels: ['Tools', 'Games', 'Education', 'Productivity'],
    values: [150, 300, 180, 120],
    type: 'pie'
  }],
  layout: {
    title: 'Genre Distribution'
  }
});

// 5. Box Plot - Rating Distribution by Category
Plotly.newPlot('box-plot', {
  data: [
    {
      y: [4.1, 4.5, 4.2, 4.8, 4.3],
      name: 'Tools',
      type: 'box'
    },
    {
      y: [3.8, 4.0, 4.1, 4.2, 3.9],
      name: 'Games',
      type: 'box'
    }
  ],
  layout: {
    title: 'Rating by Category'
  }
});

// 6. Line Chart - App Downloads Over Time
Plotly.newPlot('downloads-line', {
  data: [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    y: [500, 1500, 3000, 4000, 6000],
    type: 'scatter',
    mode: 'lines+markers'
  }],
  layout: {
    title: 'Downloads Over Time',
    xaxis: { title: 'Month' },
    yaxis: { title: 'Downloads' }
  }
});

 
             
