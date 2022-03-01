const careersContainer = document.getElementById('careers-container');
let careers = [
    {title: 'general manager', place: 'jakarta, indonesia'},
    {title: 'UI/UX designer', place: 'yokohama, japan'},
    {title: 'blog content copywriter', place: 'new york, united states'},
    {title: 'graphic designer', place: 'new york, united states'},
    {title: 'fleet supervisor', place: 'jakarta, indonesia'},
    {title: 'UX analyst', place: 'london, united kingdom'}
]

for(let career of careers) {
    careersContainer.innerHTML += `
        <div class="careers-item">
            <div class="careers-item--info">
                <p class="offer fs-600">${career.title}</p>
                <p class="offer-place fs-200">${career.place}</p>
            </div>
            <button class="button">Apply</button>
        </div>
    `;
}