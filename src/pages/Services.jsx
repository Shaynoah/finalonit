import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const accountProducts = [
  { to: '/services/mb01', icon: '🏦', title: 'Onit Business Extra Account', desc: 'Business account for MSMEs — flexible deposits, ATM card, loans eligibility and convenient channels.' },
  { to: '/services/ma01', icon: '💼', title: 'Onit Salary Account', desc: 'Salary account for employed individuals with overdraft options and insurance cover.' },
  { to: '/services/ma02', icon: '🪙', title: 'Onit Akiba Account', desc: 'Long-term savings account with limited withdrawals (4x/year) and loan options against deposits.' },
  { to: '/services/ma03', icon: '🧸', title: 'Onit Junior Account', desc: 'Junior savings for children with limited withdrawals, school-fee benefits and guardian options.' },
  { to: '/services/ma04', icon: '🎓', title: 'Onit Student Account', desc: 'Student account for college students — low min balance and easy mobile access.' },
  { to: '/services/ma05', icon: '🪙', title: 'Onit Account', desc: 'General savings account with ATM access, mobile banking and competitive interest.' },
  { to: '/services/mb02', icon: '🏢', title: 'Onit Current Account', desc: 'Current account for registered businesses and limited companies with overdraft and sweep options.' },
  { to: '/services/mb03', icon: '👔', title: 'Onit Current Personal Account', desc: 'Current account for individuals in business with overdraft and sweep arrangements.' },
  { to: '/services/mc01', icon: '👥', title: 'Onit Chama Account', desc: 'Account for organized groups (chamas) with dedicated RM, alerts and member loan eligibility.' },
  { to: '/services/ms01', icon: '🧾', title: 'Onit Staff Account', desc: 'Staff account for Onit employees — no minimum balance and no charges.' },
  { to: '/services/mc02', icon: '🏫', title: 'Onit Collection Account', desc: 'Collection accounts for schools, landlords and institutions with e-statements and alerts.' }
]

const fixedDepositProducts = [
  { to: '/services/mf01', icon: '🏦', title: 'Onit Fixed Deposit Account', desc: 'Fixed-term deposits (1–12 months) with competitive fixed interest rates.' },
  { to: '/services/mf02', icon: '📞', title: 'Onit Call Deposit Account', desc: 'On-call deposits for clients who need flexibility to withdraw funds with market-driven rates.' }
]

const loansProducts = [
  { to: '/services/mb101', icon: '🚀', title: 'Onit Biashara Boost', desc: 'Short-term working capital loans for micro & small businesses — quick processing and flexible security.' },
  { to: '/services/ml102', icon: '🌱', title: 'Onit Biashara Bora', desc: 'Partly-secured medium-size facility for growing micro & small businesses — higher limits and longer tenor.' },
  { to: '/services/ml103', icon: '🏛️', title: 'Onit Biashara Daima', desc: 'Fully-secured facility for businesses with conventional securities — larger limits and longer tenor.' },
  { to: '/services/ml104', icon: '🚚', title: 'Onit Asset Finance', desc: 'Asset finance for vehicles, motorbikes, tuktuks and other movable assets — tailored terms by asset type.' },
  { to: '/services/ml105', icon: '🧾', title: 'Onit Checkoff', desc: 'Employer check-off loan for staff in institutions with an MOU — simple payroll-backed repayment.' },
  { to: '/services/ml110', icon: '🛡️', title: 'Onit Insurance Premium Finance', desc: 'Short-term financing to cover insurance premiums so clients can pay premiums upfront.' },
  { to: '/services/ml111', icon: '💰', title: 'Onit Akiba', desc: 'Cash-covered facility advancing against fixed deposits (FDs) for short-term needs.' },
  { to: '/services/ml113', icon: '🏘️', title: 'Onit Plot Purchase', desc: 'Land and plot purchase with ready title deeds — flexible terms and secure financing.' },
  { to: '/services/ml114', icon: '🏗️', title: 'Onit Development', desc: 'Finance for construction, renovation and house finishing projects — longer tenor.' },
  { to: '/services/ml115', icon: '🤝', title: 'Onit Chama Loan', desc: 'Organized groups investing in land and assets — flexible terms for group ownership.' }
]

const savingsAccountProducts = [
  { to: '/services/ma03', icon: '🧸', title: 'Onit Junior Account', desc: 'Junior savings for children with limited withdrawals, school-fee benefits and guardian options.' },
  { to: '/services/ma04', icon: '🎓', title: 'Onit Student Account', desc: 'Student account for college students — low min balance and easy mobile access.' },
  { to: '/services/ma05', icon: '🪙', title: 'Onit Savings Account', desc: 'General savings account with ATM access, mobile banking and competitive interest.' },
  { to: '/services/agent', icon: '🏪', title: 'Mfanisi Agent Transaction Account', desc: 'Transaction account for agents to facilitate banking services and transactions.' },
  { to: '/services/mb01', icon: '🏦', title: 'Onit Business Extra Account', desc: 'Business account for MSMEs — flexible deposits, ATM card, loans eligibility and convenient channels.' },
  { to: '/services/mb03', icon: '👔', title: 'Onit Current Personal Account', desc: 'Current account for individuals in business with overdraft and sweep arrangements.' },
  { to: '/services/mc01', icon: '👥', title: 'Onit Chama Account', desc: 'Account for organized groups (chamas) with dedicated RM, alerts and member loan eligibility.' },
  { to: '/services/mc02', icon: '🏫', title: 'Onit Collection Account', desc: 'Collection accounts for schools, landlords and institutions with e-statements and alerts.' }
]

const currentAccountProducts = [
  { to: '/services/mb02', icon: '🏢', title: 'Onit Current Account', desc: 'Current account for registered businesses and limited companies with overdraft and sweep options.' },
  { to: '/services/corporate-usd', icon: '💼', title: 'Corporate Current Account USD', desc: 'US Dollar current account for corporate clients with international transaction capabilities.' },
  { to: '/services/current-euro', icon: '💶', title: 'Current Account EURO', desc: 'Euro current account for businesses and individuals with European transaction needs.' },
  { to: '/services/individual-usd', icon: '👤', title: 'Individual Current Account USD', desc: 'US Dollar current account for individuals with international banking requirements.' }
]

const creditProducts = [
  { to: '/services/mb101', icon: '🚀', title: 'Onit Biashara Boost Loan', desc: 'Short-term working capital loans for micro & small businesses — quick processing and flexible security.' },
  { to: '/services/ml102', icon: '🌱', title: 'Onit Bora Loan', desc: 'Partly-secured medium-size facility for growing micro & small businesses — higher limits and longer tenor.' },
  { to: '/services/ml103', icon: '🏛️', title: 'Onit Daima Loan', desc: 'Fully-secured facility for businesses with conventional securities — larger limits and longer tenor.' },
  { to: '/services/ml104', icon: '🚚', title: 'Onit Asset Finance', desc: 'Asset finance for vehicles, motorbikes, tuktuks and other movable assets — tailored terms by asset type.' },
  { to: '/services/ml105', icon: '🧾', title: 'Onit Check–Off Loan', desc: 'Employer check-off loan for staff in institutions with an MOU — simple payroll-backed repayment.' },
  { to: '/services/ml106', icon: '💳', title: 'Onit Salary Loan', desc: 'Salary loan for employees with salary remitted through Onit — fast processing and no security.' },
  { to: '/services/ml107', icon: '⚡', title: 'Onit Temporary Overdraft', desc: 'Short-term overdraft for employees to access part of salary before payday via mobile banking.' },
  { to: '/services/ml108', icon: '📄', title: 'Onit Cheque Discounting', desc: 'Advance against uncleared cheques to provide quick working capital before cheques clear.' },
  { to: '/services/ml109', icon: '🧾', title: 'Onit LPO / Invoice Discounting', desc: 'Finance against LPOs/LSOs to service orders — fast turnaround for contract-backed receivables.' },
  { to: '/services/ml110', icon: '🛡️', title: 'Onit IPF — Insurance Premium Financing', desc: 'Short-term financing to cover insurance premiums so clients can pay premiums upfront.' },
  { to: '/services/ml111', icon: '💰', title: 'Onit Akiba Loan', desc: 'Cash-covered facility advancing against fixed deposits (FDs) for short-term needs.' },
  { to: '/services/ml113', icon: '🏘️', title: 'Onit Plot Purchase Loan', desc: 'Land and plot purchase with ready title deeds — flexible terms and secure financing.' },
  { to: '/services/ml114', icon: '🏗️', title: 'Onit Development Loan', desc: 'Finance for construction, renovation and house finishing projects — longer tenor.' },
  { to: '/services/ml115', icon: '🤝', title: 'Onit Chama Loan', desc: 'Organized groups investing in land and assets — flexible terms for group ownership.' },
  { to: '/services/ml116', icon: '📊', title: 'Onit Business Overdraft', desc: 'Flexible overdraft for working capital — no cost if unused; helps manage cash flow.' }
]

const Services = () => {
  const [showAllFixedDeposits, setShowAllFixedDeposits] = useState(false)
  const [showAllLoans, setShowAllLoans] = useState(false)
  const [showAllSavings, setShowAllSavings] = useState(false)
  const [showAllCurrent, setShowAllCurrent] = useState(false)

  const visibleFixedDeposits = showAllFixedDeposits ? fixedDepositProducts.length : Math.min(6, fixedDepositProducts.length)
  const visibleLoans = showAllLoans ? loansProducts.length : Math.min(6, loansProducts.length)
  const visibleSavings = showAllSavings ? savingsAccountProducts.length : Math.min(6, savingsAccountProducts.length)
  const visibleCurrent = showAllCurrent ? currentAccountProducts.length : Math.min(6, currentAccountProducts.length)

  return (
    <section className="page services reveal-auto">
      <div className="container py-4 md:py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">We provide tailored financial products and support to help microbusinesses thrive — simple, transparent and local.</p>
        </div>

        {/* Branch Products: deposit and account offerings shown first */}
        <div className="container max-w-6xl mx-auto" id="branch-products">
          <div className="text-left mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">Branch Products</h2>
            <p className="text-gray-600 mt-2">Deposit and account products for individuals, groups and businesses.</p>
            <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
          </div>

          {/* Fixed Deposits Section */}
          <div className="mb-12">
            <div className="text-left mb-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Fixed Deposits</h3>
              <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
            </div>
            <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fixedDepositProducts.slice(0, visibleFixedDeposits).map((p) => (
                <Link key={p.to} to={p.to} className="product-card reveal-auto block p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
                  <div className="product-icon text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                  <div className="product-cta text-blue-600 font-semibold">View product →</div>
                </Link>
              ))}
            </div>
            {fixedDepositProducts.length > 6 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllFixedDeposits(!showAllFixedDeposits)}
                  className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {showAllFixedDeposits ? 'Show less' : 'Show more'}
                </button>
              </div>
            )}
          </div>

          {/* Loans Section */}
          <div className="mb-12">
            <div className="text-left mb-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Loan Accounts</h3>
              <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
            </div>
            <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loansProducts.slice(0, visibleLoans).map((p) => (
                <Link key={p.to} to={p.to} className="product-card reveal-auto block p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
                  <div className="product-icon text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                  <div className="product-cta text-blue-600 font-semibold">View product →</div>
                </Link>
              ))}
            </div>
            {loansProducts.length > 6 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllLoans(!showAllLoans)}
                  className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {showAllLoans ? 'Show less' : 'Show more'}
                </button>
              </div>
            )}
          </div>

          {/* Savings Account Section */}
          <div className="mb-12">
            <div className="text-left mb-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Savings Account</h3>
              <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
            </div>
            <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savingsAccountProducts.slice(0, visibleSavings).map((p) => (
                <Link key={p.to} to={p.to} className="product-card reveal-auto block p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
                  <div className="product-icon text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                  <div className="product-cta text-blue-600 font-semibold">View product →</div>
                </Link>
              ))}
            </div>
            {savingsAccountProducts.length > 6 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllSavings(!showAllSavings)}
                  className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {showAllSavings ? 'Show less' : 'Show more'}
                </button>
              </div>
            )}
          </div>

          {/* Current Accounts Section */}
          <div className="mb-12">
            <div className="text-left mb-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Current Accounts</h3>
              <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
            </div>
            <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentAccountProducts.slice(0, visibleCurrent).map((p) => (
                <Link key={p.to} to={p.to} className="product-card reveal-auto block p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
                  <div className="product-icon text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                  <div className="product-cta text-blue-600 font-semibold">View product →</div>
                </Link>
              ))}
            </div>
            {currentAccountProducts.length > 6 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllCurrent(!showAllCurrent)}
                  className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {showAllCurrent ? 'Show less' : 'Show more'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
