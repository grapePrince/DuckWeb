define(
function () {
    var exampleTemplate = `
        <object class="body" type="image/svg+xml" data="static/body.svg">현재 브라우저는 iframe을 지원하지 않습니다.</object>
        <object class="eye" type="image/svg+xml" data="{{EyeSrc}}">현재 브라우저는 iframe을 지원하지 않습니다.</object>
    `;

    var summaryTemplate = `
        <p><span>눈 : {{EyeName}}, {{EyeColor}} </span></p>
    `

     var shapeTabItem = `
        <button class="{{Display}}">{{Tab}}</button>
    `;

    var shapeThumnailItem = `
        <object class="thumnailitem" type="image/svg+xml" data="{{ThumnailSrc}}">현재 브라우저는 iframe을 지원하지 않습니다.</object>
    `;

    var shapeColorItem = `
    	<button>{{Color}}</button>
    `;

    return {
        exampleTemplate: exampleTemplate,
        summaryTemplate: summaryTemplate,
        shapeTabItem: shapeTabItem,
        shapeThumnailItem: shapeThumnailItem,
        shapeColorItem: shapeColorItem
    }
});