var inf = 10000009;
 
function Combine(a, i, j)
{
    var sum = 0;
 
    for (var l = i; l <= j; l++)
        sum += a[l];
 
    return sum;
}
 

function minCost(a, i, j, k)
{
    if (i >= j)
    {
        return 0;
    }
 
    var best_cost = inf;

    for (var pos = i; pos < j; pos++)
    {
 
        var left = minCost(a, i, pos, k);
 
        var right = minCost(a, pos + 1, j, k);
 
        best_cost = Math.min(best_cost, left + right +
                                   k * Combine(a, i, j));
    }
 
    return best_cost;
}
 
 
var n = 4;
var a = [4, 5, 6, 7];
var k = 3;

minCost(a, 0, n - 1, k)
``