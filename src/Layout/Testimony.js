import React, { useState, useRef } from 'react';
import './Testimony.css';

// ─── Data ─────────────────────────────────────────────────────────────
const testimonials = [
    {
        id: 1,
        name: 'Marieke van den Berg',
        city: 'Middelburg',
        project: 'Badkamerrenovatie',
        review:
            'Pasha Bouw heeft onze badkamer volledig getransformeerd. Van het eerste contact tot de oplevering verliep alles vlekkeloos. Het team was punctueel, netjes en vakkundig. Het resultaat overtreft onze verwachtingen. Een absolute aanrader voor iedereen die zoekt naar betrouwbare renovateurs.',
    },
    {
        id: 2,
        name: 'Thomas Hendrikx',
        city: 'Vlissingen',
        project: 'Keukenrenovatie',
        review:
            'Na jaren met een verouderde keuken te hebben geleefd, besloten wij de stap te zetten. Pasha Bouw begeleidde ons van ontwerp tot realisatie. De vakmannen werkten zorgvuldig en hielden de werf altijd proper. De nieuwe keuken is precies wat wij voor ogen hadden.',
    },
    {
        id: 3,
        name: 'Sofie Janssen',
        city: 'Goes',
        project: 'Complete renovatie',
        review:
            'Wij hebben ons volledige huis laten renoveren door Pasha Bouw en zijn er heel tevreden over. Het team werkte georganiseerd, respecteerde de afgesproken deadlines en communiceerde helder over elke fase. De prijs-kwaliteitverhouding is uitstekend.',
    },
    {
        id: 4,
        name: 'Pieter de Vries',
        city: 'Terneuzen',
        project: 'Uitbouw',
        review:
            'Voor de uitbouw van onze woonkamer kozen wij Pasha Bouw. Zij dachten actief mee over de constructie en gaven eerlijk advies. Het resultaat is een lichte, ruime leefruimte die perfect aansluit bij de bestaande architectuur. Een betrouwbaar bedrijf.',
    },
    {
        id: 5,
        name: 'Anneleen Claes',
        city: 'Bergen op Zoom',
        project: 'Schilderwerk',
        review:
            'Het schilderwerk in ons huis was aan vernieuwing toe. Pasha Bouw heeft dit professioneel en snel aangepakt. De schilders werkten nauwkeurig, beschermden onze meubels zorgvuldig en ruimden alles netjes op. Het eindresultaat is prachtig.',
    },
    {
        id: 6,
        name: 'Rik Vermeersch',
        city: 'Roosendaal',
        project: 'Tegelwerk',
        review:
            'Pasha Bouw heeft het tegelwerk in onze hal en badkamer uitgevoerd. Het team werkte precies, legde de tegels perfect recht en hield rekening met onze wensen. Wij zijn aangenaam verrast door de snelheid zonder in te boeten op kwaliteit.',
    },
    {
        id: 7,
        name: 'Lena Bogaert',
        city: 'Zierikzee',
        project: 'Stucwerk',
        review:
            'Na een lekkage lieten wij de beschadigde muren herstellen door Pasha Bouw. Het stucwerk werd vakkundig en snel uitgevoerd. Wat ons het meest opviel was de vriendelijke benadering en de transparante communicatie over kosten en planning.',
    },
];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(testimonials.length / CARDS_PER_PAGE);

// ─── Stars ────────────────────────────────────────────────────────────
function Stars() {
    return (
        <div className="ts-stars">
            {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="ts-star">★</span>
            ))}
        </div>
    );
}

// ─── Single card ──────────────────────────────────────────────────────
function TestimonyCard({ t }) {
    return (
        <div className="ts-card">
            <div className="ts-quote" aria-hidden="true">"</div>
            <p className="ts-review">{t.review}</p>
            <Stars />
            <div className="ts-divider" />
            <div className="ts-author-block">
                <div className="ts-avatar">{t.name.charAt(0)}</div>
                <div>
                    <p className="ts-author">{t.name}</p>
                    <p className="ts-meta">
                        <span className="ts-city">{t.city}</span>
                        <span className="ts-sep">·</span>
                        <span className="ts-project">{t.project}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────
function Testimony() {
    const [page, setPage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState('next');

    // Touch swipe (mobile)
    const touchStartX = useRef(null);
    const SWIPE_THRESHOLD = 50;

    const changePage = (newPage, dir) => {
        if (animating || newPage === page) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setPage(newPage);
            setAnimating(false);
        }, 380);
    };

    const goNext = () => {
        if (page < TOTAL_PAGES - 1) changePage(page + 1, 'next');
    };

    const goPrev = () => {
        if (page > 0) changePage(page - 1, 'prev');
    };

    // Mobile swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            diff > 0 ? goNext() : goPrev();
        }
    };

    // Visible cards for current page
    const start = page * CARDS_PER_PAGE;
    const visibleCards = testimonials.slice(start, start + CARDS_PER_PAGE);

    const trackClass = [
        'ts-track',
        animating ? `ts-track--exit-${direction}` : 'ts-track--enter',
    ].join(' ');

    return (
        <section className="ts-section">

            {/* ── Header ── */}
            <div className="ts-header">
                <span className="ts-eyebrow">Klantervaringen</span>
                <h2 className="ts-title">
                    Onze klanten vertellen het{' '}
                    <span className="ts-title-accent">beter dan wij</span>
                </h2>
                <p className="ts-subtitle">
                    Vakmanschap spreekt voor zich maar de tevredenheid van onze klanten zegt nog meer.
                </p>
            </div>

            {/* ── Cards grid ── */}
            <div
                className="ts-viewport"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className={trackClass} key={page}>
                    {visibleCards.map((t) => (
                        <TestimonyCard key={t.id} t={t} />
                    ))}
                </div>
            </div>

            {/* ── Bottom bar: timeline + buttons ── */}
            <div className="ts-bottom">

                {/* Timeline progress */}
                <div className="ts-timeline">
                    <div
                        className="ts-timeline-fill"
                        style={{ width: `${((page + 1) / TOTAL_PAGES) * 100}%` }}
                    />
                </div>

                {/* Nav buttons — desktop only */}
                <div className="ts-nav-buttons">
                    <button
                        className={`ts-btn ${page === 0 ? 'ts-btn--disabled' : ''}`}
                        onClick={goPrev}
                        disabled={page === 0}
                        aria-label="Vorige"
                    >
                        ←
                    </button>
                    <button
                        className={`ts-btn ts-btn--primary ${page === TOTAL_PAGES - 1 ? 'ts-btn--disabled' : ''}`}
                        onClick={goNext}
                        disabled={page === TOTAL_PAGES - 1}
                        aria-label="Volgende"
                    >
                        →
                    </button>
                </div>

            </div>

        </section>
    );
}

export default Testimony;