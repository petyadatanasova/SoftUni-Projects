function getTickets(ticketDescriptions, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (const ticketInfo of ticketDescriptions) {
        let [description, priceAsString, status] = ticketInfo.split("|");
        let price = Number(priceAsString);
        let ticket = new Ticket(description, price, status);
        tickets.push(ticket);
    }
    let sortedTickets;
    if (sortingCriteria === "destination") {
        sortedTickets= tickets.sort((a, b) => ((a.destination).localeCompare(b.destination)));
    } else if (sortingCriteria === "price") {
        sortedTickets= tickets.sort((a, b) => (a.price - b.price));

    } else if (sortingCriteria === "status") {
        sortedTickets= tickets.sort((a, b) => ((a.status).localeCompare(b.status)));
    }

    return sortedTickets;
}
// getTickets(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'
// );
getTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
);