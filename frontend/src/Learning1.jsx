import React, { useState } from "react";

export const Learning1 = () => {
    return (
        <div className="learning-module-1">
            <div class="line-vertical-1"></div>
            <p><span class="page-name">Learning Module - 401K Investment</span></p>
            <div className="left-column">
                
                <h4 className="topic">Introduction to 401(k)</h4>
                <p className="paragraph">A 401(k) is a retirement savings plan sponsored by employers. It allows employees to save 
                and invest part of their paycheck before taxes are taken out. Taxes aren't paid until the money is withdrawn from 
                the account.</p>
                <p className="paragraph">The 401(k) plan derives its name from section 401(k) of the Internal Revenue Code, which 
                established this type of saving scheme in the late 1970s as an alternative to the traditional pension plans. In 
                today's working world, it's an essential component of retirement planning, helping millions of Americans create a 
                financial cushion for their golden years.</p>

                <h4 className="topic">Types of 401(k) Plans</h4>
                <p className="paragraph">There are two main types of 401(k) plans: Traditional and Roth, each with unique tax 
                benefits.</p>
                <p className="paragraph"><strong>Traditional 401(k):</strong>Contributions are made pre-tax, reducing your taxable 
                income for the year you contribute. The funds then grow tax-deferred, meaning you'll pay taxes only when you withdraw 
                the money in retirement. Note that early withdrawals (before age 59½) often incur a penalty along with the deferred 
                taxes.</p>
                <p className="paragraph"><strong>Roth 401(k):</strong>This variation, introduced in 2006, flips the tax situation. 
                Contributions are made with after-tax dollars, so there's no immediate tax benefit. However, withdrawals in retirement, 
                including all investment growth, are tax-free, as long as you're at least 59½ and the Roth 401(k) has been open for at 
                least five years.</p>

                <h4 className="topic">Contribution Limits</h4>
                <p className="paragraph">The contribution limit to a 401(k) plan is $19,500 per year for those under age 50. If 
              3  you're 50 or older, you can make additional catch-up contributions of $6,500, for a total of $26,000.</p>

                <h4 className="topic">Employer Match</h4>
                <p className="paragraph">Many employers offer a matching contribution as part of the 401(k) plan. Commonly, an employer might contribute 50 cents or even dollar-for-dollar for each dollar the employee contributes, up to a certain percentage of the employee's salary. It's crucial to understand your employer's 401(k) match structure since not taking full advantage of this match is essentially leaving free money on the table.</p>
            
            </div>

            <div className="right-column">

                <h4 className="topic">Investment Options</h4>
                <p className="paragraph">Typically, a 401(k) plan offers a selection of mutual funds to choose from, including stock funds, bond funds, and money market funds. Some plans may also offer a brokerage option, allowing for a wider range of investments. It's important to have a diversified portfolio and align your investments with your retirement goals and risk tolerance.</p>

                <h4 className="topic">401(k) Rollover</h4>
                <p className="paragraph">When changing jobs, you can decide to "roll over" your 401(k) funds into an Individual Retirement Account (IRA) or into your new employer's 401(k) plan. This allows you to keep your savings intact and continue enjoying tax-deferred growth.</p>

                <h4 className="topic">Distributions and Loans</h4>
                <p className="paragraph">Generally, you can start taking distributions from your 401(k) without penalty at age 59½. If you take distributions before this age, you may be subject to taxes and a 10% early withdrawal penalty.</p>
                <p className="paragraph">In some circumstances, you may be able to take a loan from your 401(k). However, this should be considered carefully due to potential tax implications and the impact on your long-term retirement savings.</p>

                <button className="to-quiz">Click to take the Quiz: Level 1</button>
                
            </div>
        </div>
    )
}