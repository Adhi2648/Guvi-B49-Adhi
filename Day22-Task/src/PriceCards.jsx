import "./PriceCards.css";

function PriceCards() {
  const tiers = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Unlimited Users",
        "50GB storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private access",
        "Dedicated phone support",
        "Free Subdomain",
        "Monthly status reports",
      ],
    },
    {
      title: "Pro",
      price: "$9/month",
      features: [
        "Unlimited Users",
        "50GB storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private access",
        "Dedicated phone support",
        "Free Subdomain",
        "Monthly status reports",
      ],
    },
    {
      title: "Plus",
      price: "$49/month",
      features: [
        "Unlimited Users",
        "50GB storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private access",
        "Dedicated phone support",
        "Free Subdomain",
        "Monthly status reports",
      ],
    },
  ];

  return (
    <div className="price-cards-container">
      {tiers.map((tier, index) => (
        <div className="price-card" key={index}>
          <h2 className="tit">{tier.title}</h2>
          <p className="price">{tier.price}</p>
          <ul className="features">
            {tier.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className={
                  (tier.title === "Free" && featureIndex < 4) ||
                  (tier.title === "Pro" && featureIndex < 7) ||
                  tier.title === "Plus"
                    ? "bold"
                    : "grey"
                }
              >
                {tier.title === "Free" && featureIndex < 4 ? (
                  <i className="fas fa-check-circle"></i>
                ) : (
                  (tier.title === "Pro" || tier.title === "Plus") && (
                    <i className="fas fa-check-circle"></i>
                  )
                )}
                {feature}
              </li>
            ))}
          </ul>
          <button>Select</button>
        </div>
      ))}
    </div>
  );
}

export default PriceCards;
