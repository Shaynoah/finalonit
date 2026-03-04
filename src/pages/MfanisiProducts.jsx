import React from 'react'

const fixedDepositProducts = [
  { icon: '🏦', title: 'MFANISI FIXED DEPOSIT', desc: 'Fixed deposit product through MFANISI platform with competitive interest rates.' },
  { icon: '📱', title: 'Safaricom Fixed deposits', desc: 'Fixed deposit accounts accessible through Safaricom mobile money services.' }
]

const loansProducts = [
  { icon: '💳', title: 'mfanisi cash advance through your airtel line', desc: 'Quick cash advance facility available through your Airtel mobile line via MFANISI platform.' },
  { icon: '📱', title: 'Safaricom 1 Month loan', desc: 'Short-term one-month loan product accessible through Safaricom mobile money services.' }
]

const savingsProducts = [
  { icon: '🔒', title: 'mfanisi lock savings account', desc: 'Lock savings account through MFANISI platform with flexible terms and competitive interest.' },
  { icon: '💼', title: 'mfanisi transactional account', desc: 'Transactional savings account for everyday banking needs through MFANISI platform.' },
  { icon: '📱', title: 'Safaricom Lock savings', desc: 'Lock savings account accessible through Safaricom mobile money services.' }
]

const MfanisiProducts = () => {
  return (
    <section className="page services reveal-auto">
      <div className="container py-4 md:py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">MFANISI PRODUCTS</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Mobile banking products and services accessible through MFANISI and partner platforms.</p>
        </div>

        <div className="container max-w-6xl mx-auto" id="mfanisi-products">
          {/* Fixed Deposits Section */}
          <div className="mb-12">
            <div className="text-left mb-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Fixed Deposits</h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
            </div>
            <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fixedDepositProducts.map((p, index) => (
                <div key={index} className="product-card reveal-auto block p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
                  <div className="product-icon text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Loans Section */}
          <div className="mb-12">
            <div className="text-left mb-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Loan Accounts</h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
            </div>
            <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loansProducts.map((p, index) => (
                <div key={index} className="product-card reveal-auto block p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
                  <div className="product-icon text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Savings Section */}
          <div className="mb-12">
            <div className="text-left mb-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Savings Accounts</h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
            </div>
            <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savingsProducts.map((p, index) => (
                <div key={index} className="product-card reveal-auto block p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
                  <div className="product-icon text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MfanisiProducts
