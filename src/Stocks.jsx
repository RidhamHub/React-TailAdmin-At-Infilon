import StocksCard from "./StocksCard";

function Stocks() {
  return (
    <div className="p-7 bg-gray-50 ">
      <div className="flex gap-5">
        <StocksCard
          icon="https://react-demo.tailadmin.com/images/brand/brand-07.svg"
          title="Apple, Inc"
          number="1,232.00"
          change={11.01}
          arrow="↑"
          color="green"
        />
        <StocksCard
          icon="https://react-demo.tailadmin.com/images/brand/brand-08.svg"
          title="Paypal, Inc"
          number="965.00"
          change={9.05}
          arrow="↓"
          color="red"
        />
        <StocksCard
          icon="https://react-demo.tailadmin.com/images/brand/brand-09.svg"
          title="Tesla, Inc"
          number="1,232.00"
          change={11.01}
          arrow="↑"
          color="green"
        />
        <StocksCard
          icon="https://react-demo.tailadmin.com/images/brand/brand-10.svg"
          title="AAmazon.com, Inc"
          number="2,567.00"
          change={11.01}
          arrow="↑"
          color="green"
        />
      </div>
    </div>
  );
}

export default Stocks;
