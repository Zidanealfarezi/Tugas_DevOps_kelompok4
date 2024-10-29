import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () => {
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    color: #222260;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
    }

    .icon {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        transition: background 0.3s ease, transform 0.3s ease;
        cursor: pointer;

        &:hover {
            background: #EBEBEB;
            transform: scale(1.1);
        }

        i {
            font-size: 2.6rem;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        h5 {
            font-size: 1.5rem;
            padding-left: 2.5rem;
            position: relative;
            color: var(--primary-color-dark);
            transition: color 0.3s ease;
            cursor: pointer;

            &:hover {
                color: var(--primary-color);
            }

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .text {
                display: flex;
                flex-direction: column;
                gap: .5rem;

                p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.9;
                    font-size: 1rem;
                    transition: opacity 0.3s ease;

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }
    }

    .btn-con {
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export default IncomeItem;
a