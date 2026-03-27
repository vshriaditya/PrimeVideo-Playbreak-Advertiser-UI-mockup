"use client";

import Link from "next/link";
import { ConsoleShell } from "@/components/console-shell";
import { useCampaign } from "@/components/campaign-provider";
import { Field, SectionCard } from "@/components/form-controls";

const rewardTypes = [
  "Prime Video Credit",
  "Brand Coupon",
  "Early Access Unlock",
] as const;

export function BuilderScreen() {
  const { campaign, setAnswerOption, setField } = useCampaign();

  return (
    <ConsoleShell
      activeStep="builder"
      title="Build your Playbreak campaign"
      description="Configure campaign metadata, interaction design, reward logic, and a Prime Video pause-ad preview."
      actions={
        <Link className="button button-primary" href="/targeting">
          Continue to targeting
        </Link>
      }
    >
      <section className="builder-grid">
        <div className="stack">
          <SectionCard
            title="Campaign details"
            description="Set the campaign identity exactly how a console user would."
          >
            <div className="form-grid">
              <Field label="Campaign name">
                <input
                  value={campaign.campaignName}
                  onChange={(event) => setField("campaignName", event.target.value)}
                />
              </Field>
              <Field label="Brand name">
                <input
                  value={campaign.brandName}
                  onChange={(event) => setField("brandName", event.target.value)}
                />
              </Field>
              <Field label="Creative headline" hint="Shown above the interaction in review summaries">
                <input
                  value={campaign.creativeHeadline}
                  onChange={(event) => setField("creativeHeadline", event.target.value)}
                />
              </Field>
            </div>
          </SectionCard>

          <SectionCard
            title="Question and answers"
            description="Build the core interaction prompt and designate the correct answer."
          >
            <div className="form-grid">
              <Field label="Question">
                <textarea
                  value={campaign.question}
                  onChange={(event) => setField("question", event.target.value)}
                  rows={3}
                />
              </Field>

              <div className="answer-grid">
                {campaign.answerOptions.map((option, index) => (
                  <Field key={`${index}-${option}`} label={`Answer option ${index + 1}`}>
                    <input
                      value={option}
                      onChange={(event) => setAnswerOption(index, event.target.value)}
                    />
                  </Field>
                ))}
              </div>

              <Field label="Correct answer">
                <select
                  value={campaign.correctAnswer}
                  onChange={(event) => setField("correctAnswer", Number(event.target.value))}
                >
                  {campaign.answerOptions.map((option, index) => (
                    <option key={`${option}-${index}`} value={index}>
                      {`Option ${index + 1}: ${option}`}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </SectionCard>

          <SectionCard
            title="Reward and brand styling"
            description="Set the viewer reward and the branded visual treatment for the pause ad."
          >
            <div className="form-grid form-grid-three">
              <Field label="Reward type">
                <select
                  value={campaign.rewardType}
                  onChange={(event) => setField("rewardType", event.target.value)}
                >
                  {rewardTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Reward value">
                <input
                  value={campaign.rewardValue}
                  onChange={(event) => setField("rewardValue", event.target.value)}
                />
              </Field>
              <Field label="Brand color">
                <input
                  type="color"
                  value={campaign.brandColor}
                  onChange={(event) => setField("brandColor", event.target.value)}
                />
              </Field>
            </div>
          </SectionCard>
        </div>

        <aside className="preview-card">
          <div className="preview-shell">
            <div className="preview-frame-top">
              <span>Sponsored pause ad</span>
              <small>{campaign.format}</small>
            </div>
            <div className="preview-shell-inner">
              <div className="preview-header-row">
                <h3>Playbreak</h3>
                <div className="preview-icon">
                  <span>OK</span>
                </div>
              </div>
              <div className="preview-divider" />
              <div className="preview-brand-row">
                <div className="preview-brand-lockup">
                  <div
                    className="preview-brand-chip"
                    style={{ background: campaign.brandColor }}
                  >
                    {campaign.brandName.slice(0, 1)}
                  </div>
                  <strong>{campaign.brandName}</strong>
                </div>
                <span className="preview-timer">10 seconds</span>
              </div>
              <p className="preview-question">{campaign.question}</p>
              <p className="preview-copy">
                Answer with your remote before playback resumes. Correct answers unlock a {campaign.rewardType.toLowerCase()} instantly.
              </p>
              <div className="preview-bottom-row">
                <div>
                  <span className="preview-kicker">Viewer reward</span>
                  <strong className="preview-reward">
                    {campaign.rewardValue} {campaign.rewardType}
                  </strong>
                </div>
                <div
                  className="preview-cta"
                  style={{
                    background: `linear-gradient(180deg, #37b7ff 0%, #178ce9 100%)`,
                  }}
                >
                  Press OK to play
                </div>
              </div>
            </div>
            <div className="preview-options">
              {campaign.answerOptions.map((option, index) => (
                <div
                  key={`${option}-${index}`}
                  className={index === campaign.correctAnswer ? "is-correct" : ""}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  <strong>{option}</strong>
                </div>
              ))}
            </div>
            <div className="preview-footer">
              <span>Prime Video pause ad preview</span>
              <small>Living room layout approximation</small>
            </div>
          </div>

          <div className="inline-actions">
            <Link className="button button-secondary" href="/formats">
              Back to formats
            </Link>
            <Link className="button button-primary" href="/targeting">
              Save and continue
            </Link>
          </div>
        </aside>
      </section>
    </ConsoleShell>
  );
}
