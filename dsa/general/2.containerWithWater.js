function maxArea(height){
    let area = 0;
    let leftP = 0;
    let righP = height.length - 1;

    while(leftP < righP){
       area = Math.max((righP - leftP) * Math.min(height[leftP], height[righP]), area);

       height[leftP] < height[righP] ? leftP++ : righP--
    }

    return area;
    console.log('area', area)
}

maxArea([1,1])