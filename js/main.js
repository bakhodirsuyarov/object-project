const data = [
  {
    Img : 'https://picsum.photos/300/200/?random=1',
    title : 'Lorem ipsum dolor sit amet, consectetur.',
    description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt possimus cumque minima voluptatum alias magni a? Totam, porro? Est quaerat repellendus ad repellat fugiat eum aut doloremque dolore ab quae illum quos dolorum'
  },
  {
    Img : "https://picsum.photos/300/200/?random=2",
    title : 'Saepe odio, dolore est nam vero atque voluptates.',
    description : 'Perferendis, quia libero? Molestias iusto ab vero possimus distinctio molestiae. Qui, quo? Molestias itaque in cumque ea. Incidunt, animi ratione. Velit temporibus impedit maiores sint dolor esse, aspernatur ducimus natus, aliquam sed magnam',
  },
  {
    Img : "https://picsum.photos/300/200/?random=3",
    title : 'Esse vitae iure beatae voluptatem adipisci.',
    description : ' Incidunt, animi ratione. Velit temporibus impedit maiores sint dolor esse, aspernatur ducimus natus, aliquam sed magnam inventore dolores optio dignissimos qui nam reiciendis delectus! Voluptate ullam at nulla ipsam! Vitae blanditiis',
  },
  {
    Img : "https://picsum.photos/300/200/?random=4",
    title : "Labore iure a accusantium impedit obcaecati minima.",
    description : " Incidunt, animi ratione. Velit temporibus impedit maiores sint dolor esse, aspernatur ducimus natus, aliquam sed magnam inventore dolores optio dignissimos qui nam reiciendis delectus! Voluptate ullam at nulla ipsam! Vitae blanditiis.",
  },
  {
    Img : "https://picsum.photos/300/200/?random=5",
    title : "In nesciunt itaque autem labore?",
    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt possimus cumque minima voluptatum alias magni a? Totam, porro? Est quaerat repellendus ad repellat fugiat eum aut doloremque dolore ab quae illum quos dolorum",
  },
  {
    Img : "https://picsum.photos/300/200/?random=6",
    title : "In nesciunt itaque autem labore?",
    description : "Perferendis, quia libero? Molestias iusto ab vero possimus distinctio molestiae. Qui, quo? Molestias itaque in cumque ea. Incidunt, animi ratione. Velit temporibus impedit maiores sint dolor esse, aspernatur ducimus natus, aliquam sed magnam inventore dolores optio dignissimos qui nam reiciendis delectus!",
  }
]


const elList = document.querySelector('.list')


data.forEach((data) => {
  let NewLi = document.createElement('li');
  let img = document.createElement('img');
  let title = document.createElement('h2');
  let description = document.createElement('p');


  title.textContent = data.title;
  title.setAttribute('class', 'title')
  description.textContent = data.description;
  description.setAttribute('class', 'info')
  img.setAttribute('src', data.Img)
  img.setAttribute('class', img)
  NewLi.setAttribute('class', 'box')

  NewLi.appendChild(img);
  NewLi.appendChild(title);
  NewLi.appendChild(description);

  elList.appendChild(NewLi)
});






