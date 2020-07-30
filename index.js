
 var ele =document.getElementByClassName("container");
console.log(ele.offsetWidth);
console.log(ele.scrollWidth);
  if ((ele.offsetWidth < ele.scrollWidth) || (ele.offsetHeight < ele.scrollHeight)) {
    alert("this element is overflowing !!");
  } else {
   alert("this element is not overflowing!!");
 }
