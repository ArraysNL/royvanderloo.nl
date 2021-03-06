$(function() {
    // Default chart
    $('.chart').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 20,
        barColor: '#FF5A5F',
        trackColor:	"#ecf0f1",
        scaleLength: 0
    });

    // Logo style
    $('.chart-mini').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 10,
        barColor: '#FF5A5F',
        trackColor:	"#ecf0f1",
        scaleLength: 0,
        size: 36
    });
});