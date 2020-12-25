(function (window) {
    "use strict";

    function arChristmas(selector, _leafs)
    {
        if(typeof _leafs === 'undefined') _leafs = 5;

        var sel = document.getElementById(selector);
        sel.innerHTML = '<div class="arjunane-christmas"></div>';

        var container = sel.getElementsByClassName("arjunane-christmas")[0];

        var count = 1;
        var arr = new Array();
        var shuffleWoodsTop = new Array();
        var shuffleWoodsBottom = new Array();

        for(var i = 0; i < _leafs; i++)
        {
            container.innerHTML += '<div class="line-leafs"></div>';
            var line = container.getElementsByClassName("line-leafs")[i];
            
            for(var s = 0; s < count; s++)
            {
                line.innerHTML += '<div class="leaf">O</div>';
            }
            count += 2;
        }

        var leafs = container.getElementsByClassName("leaf");
        var count_wood = parseInt(_leafs / 2);
        for(var cw = 0; cw < count_wood; cw++)
        {
            container.innerHTML += '<div class="line-woods"></div>';
            var line_woods = container.getElementsByClassName("line-woods")[cw];
            
            for(var s = 0; s < count_wood; s++)
            {
                line_woods.innerHTML += '<div class="wood"></div>';
            }
        }

        for(var l = 0; l < leafs.length; l++)
        {
            arr.push(l);
            addActive(leafs[l], l);
        }
        
        shuffleArray(arr);
        var woods = container.getElementsByClassName("wood");
        
        setTimeout(function () {
            for(var i = 0; i < woods.length; i++)
            {
                addActive(woods[i], i);
                shuffleWoodsTop.push(i);
                shuffleWoodsBottom.push(i);
            }
        }, 100 * arr.length);

        setTimeout(function () {
            shuffleArray(shuffleWoodsTop);
            shuffleArray(shuffleWoodsBottom);
            for(var i = 0; i < arr.length; i++)
            {
                var index = arr[i];
                addColor(leafs[index], i);
            }
            for(var i = 0; i < shuffleWoodsBottom.length; i++)
            {
                var index = shuffleWoodsBottom[i];
                addColorWoods(woods[index], i, "bottom");
            }
            for(var i = 0; i < shuffleWoodsTop.length; i++)
            {
                var index = shuffleWoodsTop[i];
                addColorWoods(woods[index], i, "top");
            }
        }, 100 * (arr.length + woods.length));

        
    }

    function addActive(element, index)
    {
        setTimeout( function () {
            element.classList.add("aktif");
        }, 100 * index);
    }

    function addColor(element, index)
    {
        setTimeout( function () {
            element.classList.add("color");
        }, 100 * index);
    }

    function addColorWoods(element, index, type)
    {
        setTimeout( function () {
            element.classList.add(type);
        }, 300 * index);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    window.arChristmas = arChristmas;
})(window);