document.addEventListener("DOMContentLoaded", function () {
    console.log("Interactive dashboard initialized ✨");

    // Load Chart.js via CDN if needed (you can also include this in <head> of HTML)
    if (typeof Chart === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = renderCharts;
        document.head.appendChild(script);
    } else {
        renderCharts();
    }

    function renderCharts() {
        const chartContainer = document.getElementById("chart-container");
        chartContainer.innerHTML = ""; // Clear placeholder text

        const canvas1 = document.createElement("canvas");
        const canvas2 = document.createElement("canvas");
        const canvas3 = document.createElement("canvas");

        canvas1.id = "chart1";
        canvas2.id = "chart2";
        canvas3.id = "chart3";

        canvas1.classList.add("chart-canvas");
        canvas2.classList.add("chart-canvas");
        canvas3.classList.add("chart-canvas");

        chartContainer.appendChild(canvas1);
        chartContainer.appendChild(canvas2);
        chartContainer.appendChild(canvas3);

        // Sample Chart 1: Ratings Distribution
        new Chart(canvas1, {
            type: 'bar',
            data: {
                labels: ['1⭐', '2⭐', '3⭐', '4⭐', '5⭐'],
                datasets: [{
                    label: 'Ratings Distribution',
                    data: [50, 100, 300, 450, 600],
                    backgroundColor: '#4CAF50'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Ratings Distribution'
                    }
                }
            }
        });

        // Sample Chart 2: Category vs Installs
        new Chart(canvas2, {
            type: 'pie',
            data: {
                labels: ['Games', 'Productivity', 'Finance', 'Education'],
                datasets: [{
                    label: 'Installs',
                    data: [500, 300, 100, 200],
                    backgroundColor: ['#2196F3', '#FFC107', '#FF5722', '#8BC34A']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Category vs Installs'
                    }
                }
            }
        });

        // Sample Chart 3: Sentiment Analysis
        new Chart(canvas3, {
            type: 'doughnut',
            data: {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [{
                    label: 'Sentiment',
                    data: [60, 25, 15],
                    backgroundColor: ['#00C853', '#FFEB3B', '#D50000']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'User Sentiment Analysis'
                    }
                }
            }
        });
    }
});
